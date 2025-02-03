export const useApply=() => {
    const applicationsOpen=true

    const handleApply=() => {
        if(!applicationsOpen) {
            alert('Applications are now closed. Don\'t worry,they will open again in February.')
            return
        }
        window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSf866lN5H1gNN5Mxx0uI_x936A52IiQ5jn1dC8ZXKEGZgyLtA/viewform?usp=header'
    }
    return {handleApply,applicationsOpen}
}
