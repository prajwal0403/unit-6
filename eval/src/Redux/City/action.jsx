export const CITY_LOADING = CITY_LOADING;
export const CITY_ERR = CITY_ERR;
export const CITY_GET = CITY_GET;

export const City_loading=()=>(
    {type:CITY_LOADING}
    );

export const city_err=()=>(
    {type:CITY_ERR}
    ); 

export const city_get=(payload)=>(
    {type:CITY_GET}
    );        