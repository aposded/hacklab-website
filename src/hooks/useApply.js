export const useApply=() => {
    const applicationsOpen=true

    const handleApply=() => {
        if(!applicationsOpen) {
            alert('Applications are now closed. Don\'t worry,they will open again in February.')
            return
        }
        window.location.href='https://docs.google.com/forms/d/e/1FAIpQLScxhYjF9N44JicM2DJdN1Sp8ScU3Eqeex4bUroxDg3fX-r_uw/viewform?usp=header'
    }

    const FINANCE_FORM_URL='https://docs.google.com/forms/d/e/1FAIpQLScxhYjF9N44JicM2DJdN1Sp8ScU3Eqeex4bUroxDg3fX-r_uw/viewform'
    const ENTREPRENEURSHIP_FORM_URL='https://docs.google.com/forms/d/e/1FAIpQLSeNOTsoD_EBdTRuHBYjvKwbarthCOyQQyrMD-C7gPyGxUSYjQ/viewform?usp=header'

    const applyFinance=() => {
        if(!applicationsOpen) {
            alert('Applications are now closed. Don\'t worry,they will open again in February.')
            return
        }
        window.location.href=FINANCE_FORM_URL
    }

    const applyEntrepreneurship=() => {
        if(!applicationsOpen) {
            alert('Applications are now closed. Don\'t worry,they will open again in February.')
            return
        }
        window.location.href=ENTREPRENEURSHIP_FORM_URL
    }

    return {handleApply,applyFinance,applyEntrepreneurship,applicationsOpen}
}
