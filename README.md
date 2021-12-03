# Gmail-to-Slack
メール転送が利用できない組織内でGmailをSlackに転送するためのGAS(当然他のメールアドレスへの転送も可能)
  
1.送信したいSlackチャンネルのメールアドレスを取得  
方法: https://slack.com/intl/ja-jp/help/articles/206819278-Slack-%E3%81%AB%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%92%E9%80%81%E4%BF%A1%E3%81%99%E3%82%8B
  
2.12行目の`let slackAddress = "";`を`let slackAddress = "取得したメールアドレス";`に変更する  
  
3.Google Driveで適当なフォルダを作る  
  
4.URLからフォルダーIDを取得する  
https://drive.google.com/drive/u/0/folders/1oJaGsb0w37vxNcJk6_PAMOv_8gSnLHh_  
↓  
1oJaGsb0w37vxNcJk6_PAMOv_8gSnLHh_  
  
5.11行目`let attachmentsDrive = "";`を`let attachmentsDrive = "取得したフォルダーID";`に変更  
  
> あとはコードを読んで頑張ってね!  
> あと最初の数回はこのままだとえげつない数の通知がくるので最初だけ改造が必要だけど、  
> どうしてもやり方がわから無い人はSlackかキャンパスで聞いてください。
