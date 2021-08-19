import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import 'moment/locale/es';

const useGetBranches = (actions, allData) => {
	const {city, countryCode} = useParams()

	useEffect(() => {

		const forecastFunc = async () => {
			const api = 'd0c3d4b8020cb80a5ffde884a9100456'
			const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${api}`
			try {
				actions({type:'SET_DATA', payload: {[`${countryCode}-${city}`]: {}}})

				const response = await axios.get(url)
				const {dataAux, dataForecast} = getChartData(response)

				actions({type:'SET_DATA', payload: {[`${countryCode}-${city}`]: dataAux}})
				actions({type:'SET_FORECAST', payload: {[`${countryCode}-${city}`]: dataForecast}})
			}
			catch (error) {
				console.log(error)
			}
		}
		if (!allData[`${countryCode}-${city}`]){
			forecastFunc();
		}
	}, [city, countryCode, allData, actions])

	return {city, countryCode}
}

export default useGetBranches