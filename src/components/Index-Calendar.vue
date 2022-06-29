<template>
  <div class="Calendar">
    <div class="Cover"></div>
    <h1>{{ year }}</h1>
    <h2>{{ month_name[moon] }}</h2>
    <ul>
      <li v-for="index in weeks" :key="index">{{ index }}</li>
    </ul>
    <ul>
      <li
        :class="fullDays[index + 1] === day ? 'today' : 'null'"
        v-for="index in fullDays"
        :key="index"
      >
        {{ fullDays[index + 1] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'IndexCalendar',
  setup() {
    let calendarData = reactive({
      year: '',
      moon: '',
      day: '',
      fullDays: [],
      leapYearDays: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      normalYearDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month_name: [
        'January',
        'Febrary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Auguest',
        'September',
        'October',
        'November',
        'December',
      ],
      weeks: [
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
        '星期日',
      ],
    })

    // 获取年月日
    const getYear = function () {
      let my_date = new Date()
      calendarData.year = my_date.getFullYear()
      calendarData.moon = my_date.getMonth()
      calendarData.day = my_date.getDate()
    }

    //获取某年某月第一天是星期几
    const dayStart = function (month, year) {
      let tmpDate = new Date(year, month, 1)
      return tmpDate.getDay()
    }

    //计算某年是不是闰年
    const daysMonth = function (month, year) {
      var tmp = year % 4
      if (tmp == 0) {
        return calendarData.leapYearDays[month]
      } else {
        return calendarData.normalYearDays[month]
      }
    }

    // 获取当月所有天数
    const getFullDays = function () {
      getYear()
      let firstDay = dayStart(calendarData.moon, calendarData.year)
      let lastMonthDays = daysMonth(calendarData.moon, calendarData.year)
      // 为数组添加每天
      for (let i = 1; i <= lastMonthDays; i++) {
        calendarData.fullDays.push(i)
      }
      // 添加空缺的日期
      for (let i = 1; i < firstDay; i++) {
        calendarData.fullDays.unshift('')
      }
    }

    onMounted(() => {
      getFullDays()
    })
    return {
      ...toRefs(calendarData),
    }
  },
}
</script>

<style scoped>
.Calendar {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 1.32px 0;
  position: relative;
  width: 800px;
  margin: 440px auto 0;
  background: url('@/assets/CalendarBackground.jpg');
  background-size: 100% 150%;
  background-repeat: no-repeat;
  background-position-y: 20%;
  border-radius: 5px;
  box-shadow: 0px 2px 20px 4px black;
  transform: scale(100%);
}
.Calendar::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0px;
  background: inherit;
  filter: blur(3px);
  z-index: 1;
}
.Cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
ul {
  position: relative;
  z-index: 10;
  margin: 0 auto;
  width: 80%;
  margin-top: 2%;
}
ul li {
  text-align: center;
  width: 10%;
  margin: 1% 2%;
  display: inline-block;
  color: white;
  font-size: 16px;
}
h1 {
  position: relative;
  z-index: 10;
  color: white;
  text-align: center;
  margin-bottom: 16px;
  font-size: 30px;
}
h2 {
  position: relative;
  z-index: 10;
  color: white;
  text-align: center;
  margin-bottom: 24px;
  font-size: 25px;
}
/* 当天的日期样式 */
.today {
  text-align: center;
  width: 10%;
  margin: 1% 2%;
  display: inline-block;
  color: rgb(255, 181, 43);
  background: rgba(255, 166, 0, 0.11);
  border: 1px solid orange;
  font-size: 16px;
}
@media screen and (max-width: 1200px) {
  .Calendar {
    margin: 380px auto 0;
  }
}
@media screen and (max-width: 845px) {
  .Calendar {
    width: 83%;
    margin: 300px auto 0;
  }

  ul li {
    font-size: 14px;
  }
}
@media screen and (max-width: 746px) {
  .Calendar {
    width: 90%;
  }
}

@media screen and (max-width: 627px) {
  ul li {
    font-size: 12px;
  }
}
@media screen and (max-width: 620px) {
  .Calendar {
    margin: 260px auto 0;
  }
}
@media screen and (max-width: 545px) {
  ul li{
    margin: 0.5% 1.3%;
  }
  ul{
    width: 100%;
  }
}
@media screen and (max-width: 499px) {
  ul li {
    width: 10.5%;
    transform: scale(0.8);
    margin: 1% 1.2%;
  }
  h1{
    font-size:24px;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  h2{
    font-size: 18px;
    margin-bottom: 0px;
  }
}
</style>
