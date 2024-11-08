<?php
/* #1 替换Gravatar头像地址 */
function replace_https_avatar($avatar)
{
    $avatar = str_replace(array("secure.gravatar.com/avatar"), "gravatar.zouht.com/avatar", $avatar);
    $avatar = str_replace("http://", "https://", $avatar);
    return $avatar;
}
add_filter('get_avatar', 'replace_https_avatar');

/* #2 评论邮件回复 */
add_action('comment_post', 'comment_mail_notify');
/* comment_mail_notify v1.0 by willin kan. (所有回复都发邮件) */
function comment_mail_notify($comment_id)
{
    $comment = get_comment($comment_id);
    $parent_id = $comment->comment_parent ? $comment->comment_parent : '';
    $spam_confirmed = $comment->comment_approved;
    if (($parent_id != '') && ($spam_confirmed != 'spam')) {
        $wp_email = 'no-reply@' . preg_replace('#^www.#', '', strtolower($_SERVER['SERVER_NAME'])); //e-mail 发出点, no-reply 可改为可用的 e-mail.
        $to = trim(get_comment($parent_id)->comment_author_email);
        $subject = '您在 [' . get_option("blogname") . '] 的留言有了回复';
        $message = '<table cellpadding="0" cellspacing="0" class="email-container" align="center" width="550" style="font-size: 15px; font-weight: normal; line-height: 22px; text-align: left; border: 1px solid rgb(177, 213, 245); width: 550px;"><tbody><tr><td><table cellpadding="0" cellspacing="0" class="padding" width="100%" style="padding-left: 40px; padding-right: 40px; padding-top: 30px; padding-bottom: 35px;"><tbody><tr class="logo"><td align="center"><table class="logo" style="margin-bottom: 10px;"><tbody><tr><td><span style="font-size: 22px;padding: 10px 20px;margin-bottom: 5%;color: #65c5ff;border: 1px solid;box-shadow: 0 5px 20px -10px;border-radius: 2px;display: inline-block;">' . get_option("blogname") . '</span></td></tr></tbody></table></td></tr><tr class="content"><td><hr style="height: 1px;border: 0;width: 100%;background: #eee;margin: 15px 0;display: inline-block;"><p>' . trim(get_comment($parent_id)->comment_author) . ' 您好！<br>您在 “颢天” 站点的《' . get_the_title($comment->comment_post_ID) . '》文章下的评论：</p><p style="background: #eee;padding: 1em;text-indent: 2em;line-height: 30px;">' . trim(get_comment($parent_id)->comment_content) . '</p><p>收到了 ' . $comment->comment_author . ' 给您的回复：</p><p style="background: #eee;padding: 1em;text-indent: 2em;line-height: 30px;">' . trim($comment->comment_content) . '</p></td></tr><tr><td align="center"><table cellpadding="12" border="0" style="font-family: Lato, \'Lucida Sans\', \'Lucida Grande\', SegoeUI, \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; line-height: 25px; color: #444444; text-align: left;"><tbody><tr><td style="text-align: center;"><a target="_blank" style="color: #fff;background: #65c5ff;box-shadow: 0 5px 20px -10px #44b0f1;border: 1px solid #44b0f1;width: 200px;font-size: 14px;padding: 10px 0;border-radius: 2px;margin: 10% 0 5%;text-align:center;display: inline-block;text-decoration: none;" href="' . htmlspecialchars(get_comment_link($parent_id)) . '">立即回复</a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" class="footer" style="max-width: 550px; font-family: Lato, \'Lucida Sans\', \'Lucida Grande\', SegoeUI, \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 22px; color: #444444; text-align: left; padding: 20px 0; font-weight: normal;"><tbody><tr><td align="center" style="text-align: center; font-size: 12px; line-height: 18px; color: rgb(163, 163, 163); padding: 5px 0px;"></td></tr><tr><td style="text-align: center; font-weight: normal; font-size: 12px; line-height: 18px; color: rgb(163, 163, 163); padding: 5px 0px;"><p>此邮件为自动发送，请勿直接回复此邮件。</p><p>© ' . date("Y") . ' <a name="footer_copyright" href="' . home_url() . '" style="color: rgb(43, 136, 217); text-decoration: underline;" target="_blank">' . get_option("blogname") . '</a></p></td></tr></tbody></table>';
        $from = "From: \"" . get_option('blogname') . "\" <$wp_email>";
        $headers = "$from\nContent-Type: text/html; charset=" . get_option('blog_charset') . "\n";
        wp_mail($to, $subject, $message, $headers);
    }
}

/* #3 支持上传WebP */
function add_webp_mime_types($array)
{
    $array['webp'] = 'image/webp';
    return $array;
}
add_filter('mime_types', 'add_webp_mime_types');

/* #4 支持媒体库WebP缩略图 */
function webp_is_displayable_image($result, $path)
{
    $info = @getimagesize($path);
    if ($info['mime'] == 'image/webp') {
        $result = true;
    }
    return $result;
}
add_filter('file_is_displayable_image', 'webp_is_displayable_image');

/* #5 修复WordPress搜索结果为空但返回为200的问题
   @author ivampiresp <im@ivampiresp.com> */
function search_404_fix_template_redirect()
{
    if (is_search()) {
        global $wp_query;

        if ($wp_query->found_posts == 0) {
            status_header(404);
        }
    }
}
add_action('template_redirect', 'search_404_fix_template_redirect');
