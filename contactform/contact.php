<?php

// an email address that will be in the From field of the email.
$from = 'Studio Legale Favaretto - Contact Form <info@stdiolegalefavaretto.it>';

// an email address that will receive the email with the output of the form
$sendTo = 'Avv. Giulia Favaretto <avv.giuliafavaretto@gmail.com>';

// subject of the email
$subject = 'Nuovo messaggio di contatto';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('name' => 'Nome', 'email' => 'Email', 'subject' => 'Oggetto', 'message' => 'Messaggio'); 


// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
//error_reporting(E_ALL & ~E_NOTICE);
error_reporting(0);

try
{

  if (count($_POST) == 0) throw new \Exception('Form is empty');


  $contactEmail = $_POST['email'];
  if (!isset($contactEmail)) throw new \Exception('Email is empty');
  if (!filter_var($contactEmail, FILTER_VALIDATE_EMAIL)) throw new \Exception('Email is not valid');

  $contactName = $_POST['name'];
  if ((!isset($contactName)) || (empty($contactName))) throw new \Exception('Name is empty');

  $contactSubject = $_POST['subject'];
  if ((!isset($contactSubject)) || (empty($contactSubject))) throw new \Exception('Subject is empty');

  $contactMessage = $_POST['message'];
  if ((!isset($contactMessage)) || (empty($contactMessage))) throw new \Exception('Message is empty');

            
  $emailText = "Hai ricevuto un nuovo messaggio\n=============================\n";

  foreach ($_POST as $key => $value) {
    // If the field exists in the $fields array, include it in the email 
    if (isset($fields[$key])) {
      $emailText .= "$fields[$key]: $value\n";
    }
    else {
      throw new \Exception( '"' . $key . '" is not valid');
    }
  }

  // All the neccessary headers for the email.
  $headers = array('Content-Type: text/plain; charset="UTF-8";',
    'From: ' . $from,
    'Reply-To: ' . $contactEmail,
    'Return-Path: ' . $from,
  );
  
  // Send email
  if (!mail($sendTo, $subject, $emailText, implode("\n", $headers))) {
    throw new \Exception( 'SMTP error');
  }

  $response = 'OK';
}
catch (\Exception $e)
{
  $response = "C'è stato un errore durante l'invio della richiesta. Riprova più tardi. <br/>(" . $e->getMessage() . ")";
}

echo $response;
