import { RatePageData } from "@/api/functions/allcoinsapi";
import { useQuery } from "react-query";
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Link } from '@mui/material';



interface Rate{ 
    id: string
    symbol: string
    currencySymbol: string
    type: string
    rateUsd: string


}


export default function RatePage(){

    const {data,isLoading,error}=useQuery({
        queryKey:["ratepage"],
        queryFn:RatePageData

    });
    console.log("rate page DAta:",data)

    return(
        <TableContainer>
             <Table>
        <TableHead>
          <TableRow>
            <TableCell>Coin Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Change</TableCell>
            <TableCell>24h Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { data?.map((item: Rate,key:any) => (
            <TableRow key={key.id}>
              <TableCell>
                <Link href={`/ratepage/${item.id}`}>
                {item.symbol}</Link>
              
              </TableCell>
              <TableCell>
                {item.currencySymbol}
            
              </TableCell>
              <TableCell>
            
              </TableCell>
              <TableCell>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>           
        </TableContainer>
    )

    


}