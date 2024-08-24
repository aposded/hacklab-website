export const useApply=() => {
    const applicationsOpen=true

    const handleApply=() => {
        if(!applicationsOpen) {
            alert('Applications are currently closed. Stay tuned for updates!')
            return
        }
        window.location.href='https://forms.gle/YDwThmoZ7UJTv7h6A'
    }
    return {handleApply,applicationsOpen}
}