export default function listenerNetWork () {
  window.addEventListener('online', () => {
    console.log('有网了666')
  })
  window.addEventListener('offline', () => {
    let options = {
      title: 'TerryWang',
      body: '网络异常，请检查你的网络'
    }
    let myNotification = new window.Notification(options.title, options)
    myNotification.onclick = () => {
      console.log('点击了系统消息')
    }
  })
}
