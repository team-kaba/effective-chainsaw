package com.example.myalarmclock

import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.format.Time
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*
import java.util.*

class MainActivity : AppCompatActivity(), TimeAlertDialog.Listener {

    override fun getUp() {
        // アクティビティを終了する
        finish()
    }

    override fun snooze() {
        // 「あと5分」ボタンをタップしたら5分後にアラームを再セットする
        val calendar = Calendar.getInstance()
        calendar.timeInMillis = System.currentTimeMillis()
        setAlarmManager(calendar)
        finish()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // エクストラの"onReceive"にtrueが指定された起動された場合にダイアログを表示する
        if (intent?.getBooleanExtra("onReceive", false) == true) {
            val dialog = TimeAlertDialog()
            dialog.show(supportFragmentManager, "alert_dialog")
        }


        setContentView(R.layout.activity_main)

        // 「アラームをセットする」ボタンが押下されたときの処理
        setAlarm.setOnClickListener {
            val calendar = Calendar.getInstance()
            // 現在時刻を設定
            calendar.timeInMillis = System.currentTimeMillis()
            // 現在時刻の5秒後の時間で時刻を編集
            calendar.add(Calendar.SECOND, 5)
            setAlarmManager(calendar)
        }

        // 「アラームをキャンセル」ボタンを押下されたときの処理
        cancelAlarm.setOnClickListener {
            cancelAlarmManager()
        }
    }

    /**
     * アラームを登録する
     * @param calendar カレンダーオブジェクト
     */
    private fun setAlarmManager(calendar: Calendar) {
        val am = getSystemService(Context.ALARM_SERVICE) as AlarmManager
        // アラーム時刻になった時にシステムから発行されるインテントを作成
        val intent = Intent(this, AlarmBroadCastReceiver::class.java)
        //　AlarmManagerに登録するために、作成したインテントを指定してペンディングインテントを作成
        val pending = PendingIntent.getBroadcast(this, 0, intent, 0)
        when {
            // 設定するアラームの時刻とアラーム設定のためのインテントを指定
            // API21の場合(Android 5.0 Lollipop)
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP -> {
                val info = AlarmManager.AlarmClockInfo(
                    calendar.timeInMillis, null) //アラーム設定のためのインテントを使用しないためnull
                am.setAlarmClock(info, pending)
            }
            // API19の場合(Android 4.4 KitKat)
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT -> {
                // アラームが配信されるようにスケジュールする
                am.setExact(AlarmManager.RTC_WAKEUP,
                            calendar.timeInMillis, pending)
            }
            // API19以前
            else -> {
                am.set(AlarmManager.RTC_WAKEUP,
                        calendar.timeInMillis, pending)
            }
        }
    }

    /**
     * アラームをキャンセルします
     */
    private fun cancelAlarmManager() {
        val am = getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val intent = Intent(this, AlarmBroadCastReceiver::class.java)
        val pending = PendingIntent.getBroadcast(this, 0, intent, 0)
        am.cancel(pending)
    }
}
