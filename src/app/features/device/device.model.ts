export class Device{
    device_id: string
    device_name: string
    device_type: string
    device_power: number
    device_value: string
    device_state: boolean
    device_topic: string
}
export class DeviceGroup{
    device_room:string
    device_sensors:Device[]
    device_count: number
}
export class DevicesApiResponse{
    message:string
    response:{
        device_groups:DeviceGroup[],
        device_total:number
        device_active:number
    }
    response_code:number
}
export class DeviceDetailsResponse{
    message:string
    response:Device
    response_code:number
}
