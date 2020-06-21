package com.example.myalarmclock

import android.app.DatePickerDialog
import android.app.Dialog
import android.app.TimePickerDialog
import android.content.Context
import android.os.Bundle
import android.widget.DatePicker
import android.widget.TimePicker
import androidx.appcompat.app.AlertDialog
import androidx.fragment.app.DialogFragment
import java.util.*

/**
 * アラームダイアログに関するクラス
 */
class TimeAlertDialog : DialogFragment() {

    /**
     * ダイアログ専用のインターフェース
     */
    interface Listener {
        fun getUp()
        fun snooze()
    }

    /**
     * リスナー用変数
     */
    private var listener : Listener? = null

    /**
     * 変数listenerの初期化するメソッド
     * フラグメントのonAttachメソッドはアクティビティからフラグメントが呼ばれた時に処理される。
     * @param context TimerAlertDialogを呼び出したアクティビティのコンテキスト
     */
    override fun onAttach(context: Context) {
        super.onAttach(context)
        when(context) {
            is Listener -> listener = context
        }
    }

    /**
     * ダイアログが生成されたとき、onCreateとonCreateViewの間で呼ばれます。
     * @param savedInstanceState 保存されたフラグメントの状態
     * @return 作成されたDialogオブジェクト
     */
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        //表示するダイアログの内容はAlertDialog.Builderのインスタンスを生成してそれを使って設定していく。
        val builder = AlertDialog.Builder(requireActivity())

        //ダイアログに文字列を表示する
        builder.setMessage("時間になりました!")

        //ダイアログにボタンを表示する
        builder.setPositiveButton("起きる") {
            // onClick内の処理をSAM変換によりラムダ式記述
            // 「起きる」ボタンを表示し、ボタンをタップすると、listenerに保持しているアクティビティのgetUp()をコールバック
            dialog, which -> listener?.getUp()
        }
        builder.setNegativeButton("あと5分") {
            // 「あと5分」ボタンを表示し、ボタンをタップすると、listenerの保持しているアクティビティのsnooze()をコールバック
            dialog, which -> listener?.snooze()
        }

        // Builderの設定に従いAlertDialogを生成
        return builder.create()
    }
}

/**
 * 日付選択ダイアログ
 */
class DatePickerFragment : DialogFragment(),
        DatePickerDialog.OnDateSetListener {

    /**
     * 日付を選択された処理を実装するインターフェース
     */
    interface OnDateSelectedListener {
        fun onSelected(year: Int, month: Int, date:Int)
    }

    /**
     * OnDateSelectedListenerのリスナー用変数
     */
    private var listener: OnDateSelectedListener? = null

    /**
     * 変数listenerを初期化するメソッド。
     * アクティビティからフラグメントが呼び出されたときの処理されます。
     * @param context DatePickerFragmentを呼び出したアクティビティのコンテキスト
     */
    override fun onAttach(context: Context) {
        super.onAttach(context)
        when(context) {
            is OnDateSelectedListener -> listener = context
        }
    }

    /**
     * ダイアログが生成されたとき、onCreateとonCreateViewの間で呼ばれます。
     * 初期値は現在の日付。
     * @param savedInstanceState 保存されたフラグメントの状態
     * @return DatePickerDialogのインスタンス
     */
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        // 現在の日付を初期値として設定
        val c = Calendar.getInstance()
        val year = c.get(Calendar.YEAR)
        val month = c.get(Calendar.MONTH)
        val date = c.get(Calendar.DAY_OF_MONTH)

        return DatePickerDialog(requireActivity(), this, year, month, date)
    }

    /**
     * 日付が選択されたときに呼ばれます。
     * @param view ダイアログに関連付けられたビュー
     * @param year 年
     * @param month 月
     * @param dayOfMonth 日
     */
    override fun onDateSet(view: DatePicker?, year: Int, month: Int, dayOfMonth: Int) {
        listener?.onSelected(year, month, dayOfMonth)
    }

}

class TimePickerFragment : DialogFragment(),
        TimePickerDialog.OnTimeSetListener {

    /**
     * 時刻を選択されたときの処理を実装するインターフェース
     */
    interface OnTimeSelectedListener {
        fun onSelected(hourOfDay: Int, minute: Int)
    }

    /**
     * リスナー用変数
     */
    private var listener : OnTimeSelectedListener? = null


    /**
     * 変数listenerを初期化するメソッド。
     * フラグメントが呼ばれ、最初にコンテキストにアタッチされたときに呼ばれます。
     * @param context TimePickerFragmentを呼び出したアクティビティのコンテキスト
     */
    override fun onAttach(context: Context) {
        super.onAttach(context)
        when (context) {
            is OnTimeSelectedListener -> listener = context
        }
    }

    /**
     * ダイアログが生成されたとき、onCreateとonCreateViewの間で呼ばれます。
     * 初期値は現在の時刻
     * @param savedInstanceState 保存されたフラグメントの状態
     * @return TimePickerDialog
     */
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val c = Calendar.getInstance()
        val hour = c.get(Calendar.HOUR_OF_DAY)
        val minute = c.get(Calendar.MINUTE)
        return TimePickerDialog(context, this, hour, minute, true)
    }

    /**
     * 時刻が選択されたときの呼ばれます。
     * @param view ダイアログに関連付けられたTimePickerビュー
     * @param hourOfDay 時
     * @param minute 分
     */
    override fun onTimeSet(view: TimePicker?, hourOfDay: Int, minute: Int) {
        listener?.onSelected(hourOfDay, minute)
    }

}