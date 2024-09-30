export const useApply=() => {
    const applicationsOpen=false

    const handleApply=() => {
        if(!applicationsOpen) {
            alert('Applications are now closed. Don\'t worry,they will open again in February.')
            return
        }
        window.location.href='https://forms.gle/YDwThmoZ7UJTv7h6A'
    }
    return {handleApply,applicationsOpen}
}
