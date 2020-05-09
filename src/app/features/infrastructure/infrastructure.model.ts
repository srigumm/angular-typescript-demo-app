export interface Infrastructure {
    infrastructure_id: string,
    infrastructure_name: string,
    infrastructure_type: string,
    infrastructure_file_size: string,
    is_admin:boolean
}
export interface InfrastructureApiResponse{
    message: string,
    response:Infrastructure[],
    response_code:number
}