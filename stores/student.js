export const useStudentStore = defineStore('student', () => {


    const authorization = ({login, password}) => {
        console.log(login, password)
    }

    return {
        authorization
    }
})