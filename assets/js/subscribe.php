<?php
 
require_once 'MailChimp.php';
use \DrewM\MailChimp\MailChimp;
 
// Email address verification
function isEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
  
if($_POST) {
  
    $mailchimp_api_key = eedb1dde3863e8e76cfc0c1d49e925f5-us13; // enter your MailChimp API Key
    // ****
    $mailchimp_list_id = bc4935bb71; // enter your MailChimp List ID
    // ****
  
    $subscriber_email = addslashes( trim( $_POST['email'] ) );
  
    if( !isEmail($subscriber_email) ) {
        $array = array();
        $array['valid'] = 0;
        $array['message'] = 'Insert a valid email address!';
        echo json_encode($array);
    }
    else {
        $array = array();
          
        $MailChimp = new MailChimp($mailchimp_api_key);
         
        $result = $MailChimp->post("lists/$mailchimp_list_id/members", [
                'email_address' => $subscriber_email,
                'status'        => 'pending',
        ]);
          
        if($result == false) {
            $array['valid'] = 0;
            $array['message'] = 'An error occurred! Please try again later.';
        }
        else {
            $array['valid'] = 1;
            $array['message'] = 'Thanks for your subscription! We sent you a confirmation email.';
        }
  
            echo json_encode($array);
  
    }
  
}
  
?>