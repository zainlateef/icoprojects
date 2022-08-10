const DataAPI = async () => {
    try {
        let data = await fetch(
            "https://sheets.googleapis.com/v4/spreadsheets/1ZQO20iq34zLCraNo6XFHYHqf45lEW0lm8rvD9dnbQs8/values/sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyC5OCF15K--uZ_ljOHO3VDoih58roLVVRE"
        );
        let { values } = await data.json();
        let [, ...Data] = values.map((data) => data);
        return Data;
    } catch {
        console.log("Error");
    }
};
export default DataAPI;