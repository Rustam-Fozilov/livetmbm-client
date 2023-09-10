import data from '../data/data.json'


export const useCameraLink = () => {
    return useState('link_to_show', () => data.regions[0].cameras[0].link)
}


export const useCameraName = () => {
    return useState('camera_name', () => data.regions[0].cameras[0].name)
}


export const useSelectedRegion = () => {
    return useState('selected_region', () => data.regions[0])
}


export const useSelectedCameraId = () => {
    return useState('selected_camera_id', () => data.regions[0].cameras[0].id)
}