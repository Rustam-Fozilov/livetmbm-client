export const useCameraLink = () => {
    return useState('camera_link', () => null)
}


export const useSelectedRegion = () => {
    return useState('selected_region', () => null)
}

export const useSelectedCamera = () => {
    return useState('selected_camera', () => null)
}

export const useRegionCameras = () => {
    return useState('region_cameras', () => null)
}