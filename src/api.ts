import { get, post } from './ClassDecorator'


let server


class A{
    @post('code:haswlejwkejk232')
    getList(data: any) {
        return {
            data: {
                ...data,
                infOutType: 1,
            }
        }
    }


    @get('code:skdwjrkwmk@322321')
    getName() {
        return {
            data: {
                infOutType: 2,
            }
        }
    }

}


if (!server) {
    server = new A()
}


export default server



