import api from "../services/api"

const useCheckMobile = () => {
    const checkMobile = async ( mobile ) => {
        const res = await api.get( `/groupHealthQuotes?mobile=${ mobile }` );
        return res.data.length > 0;
    };

    return checkMobile;
};

export default useCheckMobile;