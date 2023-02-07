import Data from "../../classes/Data"


export default async function fetchData(id) {
    const baseUrl = `http://localhost:3000/User/${id}`
    async function fetchUserData() {
        try {
            const response = await fetch(`${baseUrl}`)
            const { data } = await response.json()
            return data
        } catch (err) {
            return `Error: ${err}`
        }
    }

    async function fetchActivityData() {
        try {
            const response = await fetch(`${baseUrl}/activity`)
            const { data } = await response.json()
            return data
        } catch (err) {
            return `Error: ${err}`
        }
    }

    async function fetchAverageData() {
        try {
            const response = await fetch(`${baseUrl}/average-sessions`)
            const { data } = await response.json()
            return data
        } catch (err) {
            return `Error: ${err}`
        }
    }

    async function fetchPerformanceData() {
        try {
            const response = await fetch(`${baseUrl}/performance`)
            const { data } = await response.json()
            return data
        } catch (err) {
            return `Error: ${err}`
        }
    }




    let userData = await fetchUserData()
    let activityData = await fetchActivityData()
    let averageData = await fetchAverageData()
    let performance = await fetchPerformanceData()

    let myData = new Data(userData, activityData, averageData, performance)
    console.log(myData)

    return myData
}