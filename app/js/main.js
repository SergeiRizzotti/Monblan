const fromDate = datepicker("#fromDate", {
    id: 1,
    maxDate: new Date(),
    minDate: new Date(2020, 04, 20),
    position: "br",
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString();
        input.value = value;
    },
});
const toDate = datepicker("#toDate", {
    id: 1,
    maxDate: new Date(),
    minDate: new Date(2020, 04, 20),
    position: "br",
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString();
        input.value = value;
    },
});

const closeBtnFromDate = document.getElementById("close-fromDate");
const closeBtnToDate = document.getElementById("close-toDate");
const openBtnFromDate = document.getElementById("open-fromDate");
const openBtnToDate = document.getElementById("open-toDate");

closeBtnFromDate.addEventListener("click", () => fromDate.setDate());
closeBtnToDate.addEventListener("click", () => toDate.setDate());
openBtnFromDate.addEventListener("click", (e) => {
    e.stopPropagation();

    const isHidden = fromDate.calendarContainer.classList.contains("qs-hidden");
    fromDate[isHidden ? "show" : "hide"]();
});
openBtnToDate.addEventListener("click", (e) => {
    e.stopPropagation();

    const isHidden = toDate.calendarContainer.classList.contains("qs-hidden");
    toDate[isHidden ? "show" : "hide"]();
});

const swup = new Swup();
