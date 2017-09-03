const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
export function displayDate(date){
    return monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
}