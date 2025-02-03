export const useApply=() => {
    const applicationsOpen=true

    const handleApply=() => {
        if(!applicationsOpen) {
            alert('Applications are now closed. Don\'t worry,they will open again in February.')
            return
        }
        window.location.href='TKTKTKTK'
    }
    return {handleApply,applicationsOpen}
}
