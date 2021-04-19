import React, { useState, forwardRef, Fragment } from "react";
// import axios from "axios";
import MaterialTable from 'material-table';
import SearchBar from "material-ui-search-bar";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const showFilter = ["View", "Type", "Test"];

function App() {
  // const [tableData, setTableData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
  //     setTableData(result.data);
  //   })();
  // }, []);

  const [searched, setSearched] = useState('');
  const requestSearch = (label, searchedVal) => {
      console.log('it is:' + label + ', Selected: ' + searchedVal)
  };

  const cancelSearch = (cancelLabel) => {
    setSearched("");
    requestSearch(cancelLabel, searched);
  };

  return (
    <Fragment>
      <div>
        {
          showFilter.map((item) => {
            return <SearchBar
            key={item}
            placeholder={item}
            value={searched}
            onChange={(searchVal) => requestSearch(item, searchVal)}
            onCancelSearch={() => cancelSearch(item)}
          />
          })
        }
      </div>
    <MaterialTable
     icons={tableIcons}
      title="Custom Filtering Algorithm Preview"
      columns={[
        {
          title: 'Name', 
          field: 'name',
          customFilterAndSearch: (term, rowData) => term === rowData.name.length
        },
        { title: 'E-mail', field: 'email' },
        { title: 'Age', field: 'age', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'Taipei', 63: 'Sanlıurfa', 80: 'Tainan' },
        },
        { title: 'Gender', field: 'gender' },
      ]}
      data={[
        { name: "Mehmet", email: "mehmet@gmail.com", age: 58, birthCity: 63, gender: "Male" },
        { name: "Zerya", email: "zerya@gmail.com", age: 37, birthCity: 34, gender: "Female" },
        { name: "John", email: "john@gmail.com", age: 12, birthCity: 63, gender: "Male" },
        { name: "Bren", email: "bren@gmail.com", age: 24, birthCity: 63, gender: "Male" },
        { name: "Marry", email: "marry@gmail.com", age: 18, birthCity: 80, gender: "Female" },
        { name: "Shohail", email: "shohail@gmail.com", age: 25, birthCity: 34, gender: "Male" },
        { name: "Aseka", email: "aseka@gmail.com", age: 19, birthCity: 80, gender: "Female" },
        { name: "Meuko", email: "meuko@gmail.com", age: 12, birthCity: 63, gender: "Female" },
      ]}
      options={{
        filtering: true,
        sorting: true,
        fixedColumns: {
          left: 1
        },
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        }
      }}
    />
    </Fragment>
  );
}

export default App;