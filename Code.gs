function myFunction() {
  //メールの検索と変数の初期化
  let threads = GmailApp.search('-label:処理済み -label:通知済み in:inbox');
  let from = "";
  let plainBody = "";
  let subject = "";
  let rootFiles = "";
  let url = "";
  
  //Config
  let attachmentsDrive = ""; //添付ファイルを保存するためのフォルダー(GDrive)
  let slackAddress = ""; //チャンネル設定->インテグレーションから取得
  
  threads.forEach(function(thread) {
    let messages = thread.getMessages();

    messages.forEach(function(message) {
      plainBody = message.getPlainBody();
      
      from = message.getFrom();
      subject = message.getSubject();

      message.getAttachments().forEach(function(attachment){        
          let file = DriveApp.getFolderById(attachmentsDrive).createFile(attachment); 
          url = url+file.getUrl()+"\n";
          file.setSharing(DriveApp.Access.ANYONE_WITH_LINK,DriveApp.Permission.COMMENT);
      });
    });

    // スレッドに処理済みラベルを付ける
    let label = GmailApp.getUserLabelByName('通知済み');
    thread.addLabel(label);
    thread.markRead();

  const options = { name: from+" via EmailTransfer" };  //送信者の名前
  GmailApp.sendEmail(slackAddress, subject, plainBody+"\n"+url, options);
  });
}
