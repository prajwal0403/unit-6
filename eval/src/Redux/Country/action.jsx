export const COUNTRY_LOADING = COUNTRY_LOADING;
export const COUNTRY_ERR = COUNTRY_ERR;
export const COUNTRY_GET = COUNTRY_GET;

export const country_loading=()=>(
    {type:COUNTRY_LOADING}
    );

export const country_err=()=>(
    {type:COUNTRY_ERR}
        ); 

export const country_get=(payload)=>(
    {type:COUNTRY_GET}
    )  