import { MarketList } from "@/api/functions/allcoinsapi"

import  Container  from '@mui/icons-material'
import { useQuery } from "react-query"
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Link } from '@mui/material';





interface marketlist{
    exchangeId: string
  rank: string
  baseSymbol: string
  baseId: string
  quoteSymbol: string
  quoteId: string
  priceQuote: string
  priceUsd: string
  volumeUsd24Hr: string
  percentExchangeVolume: string
  tradesCount24Hr: string
  updated: number
}

export default function MarketListPAge(){


    const {data,isLoading,error}=useQuery({
        queryKey:["market"],
        queryFn:MarketList
    });
    console.log("market Data",data)

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
          { data?.map((item: marketlist, key:any) => (
            <TableRow key={key}>
              <TableCell>
              {item.rank}
              </TableCell>
              <TableCell>
            
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