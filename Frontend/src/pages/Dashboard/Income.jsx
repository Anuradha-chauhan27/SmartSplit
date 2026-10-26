import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useUserAuth } from '../../hooks/useUserAuth';
import IncomeOverview from '../../components/Income/IncomeOverview'
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

 
const Income = () => {

  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading]= useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddIncomeModel, setOpenAddIncomeModel] = useState(false)


  //get income details 
  const fetchIncomeDetails = async()=>{
    if(loading) return;

    setLoading(true);

    try{
      const response = await axiosInstance.get(
        `${API_PATHS.INCOME.GET_ALL_INCOME}`
      );

      if(response.data){
        setIncomeData(response.data);
      }
    }catch(error){
      console.log("Somthing went wrong. Please try again",error)
    }finally{
      setLoading(false);
    }
  };

  //handle Add Income
  const handleAddIncome = async(income)=>{};

  //delete Income
  const deleteIncome = async(id)=>{};

  //handle download Income details
  const handleDownloadIncomeDetails = async()=>{};

  useEffect(()=>{
    fetchIncomeDetails();

    return ()=>{};
  },[])

    useUserAuth();
  
  return (
    <DashboardLayout activeMenu="Income">
      <div className='my-5 mx-auto'>
        <div className='grid grid-cols-1 gap-6'>
          <div className=''>
            <IncomeOverview
            transactions={incomeData}
            onAddIncome={()=>setOpenAddIncomeModel(true)}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Income;