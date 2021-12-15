function sendmail() {
   const inputs = document.querySelector('form');

   var name = inputs.elements["Name"].value;
   var email = inputs.elements["Email"].value;
   var subject = inputs.elements["Subject"].value;
   var message = inputs.elements["Message"].value;

   var Body = 'Tên: ' + name + '<br>Email: ' + email + '<br>Chủ đề: ' + subject + '<br>Nội dung: ' + message;
   console.log(name, email, subject, message);
   Email.send({
      SecureToken: "c4ae55fc-10a8-4e51-91e7-6da154b10ea5",
      To: 'aichoibangbangko@gmail.com',
      From: "aichoibangbangko@gmail.com",
      Subject: "Tin nhắn mới từ " + name,
      Body: Body
   }).then(
      message => {
         //console.log (message);
         if (message == 'OK') {
            showSuccessToast();
            document.getElementById('xyzform').reset();
         }
         else {
            showErrorToast();
         }
      }
   );
}

