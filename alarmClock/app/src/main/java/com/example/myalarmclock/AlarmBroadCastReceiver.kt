package com.example.myalarmclock

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.widget.Toast


/**
 * AlarmManagerからブロードキャストされるインテントを受け取るクラス
 *
 */
class AlarmBroadCastReceiver : BroadcastReceiver() {

    /**
     * ブロードキャストインテントを受け取ったときに呼ばれます。
     * 時刻になったらAlarmManagerからインテントを通知され、
     * BroadcastReceiverがActivityを起動します。
     *
     * @param context レシーバーが実行されているコンテキスト
     * @param intent 受け取ったインテント
     */
    override fun onReceive(context: Context, intent: Intent) {
        // TimerAlertDialogを表示する
        //　BroadcastReceiverクラスではダイアログを表示できないため、一度アクティビティを呼び出す
        val mainIntent = Intent(context, MainActivity::class.java)
            .putExtra("onReceive", true)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(mainIntent)
    }
}
