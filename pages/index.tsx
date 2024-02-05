import { Fetchcoins } from "@/api/functions/allcoinsapi";
import axios from "axios"
import { useQuery } from "react-query";
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Link } from '@mui/material';
import Wraper from "@/layout/wrapers/wrapers";






// const FetchCoins= async()=>{
//     const res= await axios.get("https://api.coincap.io/v2/assets");
//     console.log(res);

// }
export default function HomePage() {

  const { data, isLoading, error } = useQuery({
    queryKey: ["coins"],
    queryFn: Fetchcoins
  });
  console.log("coins:", data)



  return (
<Wraper>
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
          { data?.map((coin: Coin) => (
            <TableRow key={coin.id}>
              <TableCell>
                <Link href={`/assets/${coin.id}`}>
                {coin.name}
                </Link>
               
              </TableCell>
              <TableCell>
              {coin.priceUsd}
              </TableCell>
              <TableCell>
              {coin.changePercent24Hr}
              </TableCell>
              <TableCell>
              {coin.volumeUsd24Hr}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Wraper>

  )

}