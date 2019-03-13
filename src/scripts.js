function getTodayMonthName() {
    let currentdate = new Date()
    const month = currentdate.toLocaleString('en-us', { month: 'long' })
    return month
}

function getTodayMonth() {
    const currentdate = new Date()
    const month = currentdate.getMonth() + 1 //January is 0!
    return month
}

function getTodayDate() {
    let currentdate = new Date()
    let dd = currentdate.getDate()
    let mm = currentdate.getMonth() + 1 //January is 0!
    let yyyy = currentdate.getFullYear()

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    currentdate = mm + '/' + dd + '/' + yyyy

    return currentdate
}

function getTodayTime() {
    const currentdate = new Date()

    const today_time = currentdate.getHours() + ':'
		+ currentdate.getMinutes() + ':'
		+ currentdate.getSeconds()

    return today_time
}

function getTodayDateTime() {
    const currentdate = new Date()
    const datetime = 'Created At: ' + currentdate.getDate() + '/'
		+ (currentdate.getMonth() + 1) + '/'
		+ currentdate.getFullYear() + ' @ '
		+ currentdate.getHours() + ':'
		+ currentdate.getMinutes() + ':'
		+ currentdate.getSeconds()

    return datetime
}

export {
    getTodayMonthName,
    getTodayDate,
    getTodayTime,
    getTodayDateTime,
    getTodayMonth
}