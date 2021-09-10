import Barchart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
        <NavBar/>
        <div className = "container">
          <h1 className="text-primary py-3">Acompanhe suas vendas</h1>
  
          <div className="row px-3">
            <div className="col-sm-6">
                <h5 className="text-center text-secondary">Porcentagem de Sucesso</h5>
                <Barchart/>
             </div>
             <div className="col-sm-6">
                <h5 className="text-center text-secondary">Porcentagem de Sucesso</h5>
                <DonutChart/>
             </div>
          </div>
  
          <div className="py-3">
            <h2 className="text-primary">Todas as vendas</h2>
          </div>
          <DataTable/>
        </div>
        
        <Footer/>
      </>
    );
};

export default Dashboard;
