import { db } from "./Firebase-config";
import firestore from '@react-native-firebase/firestore';

const DataAPI = async () => {
    try {
        let data = await firestore().collection('prayer-times').doc('KG8QAfnUZzHfdxm940Ae').get();
        let { values } = await data.json();
        let [, ...Data] = values.map((data) => data);
        return Data;
    } catch {
        console.log("Error");
    }
};
export default DataAPI;