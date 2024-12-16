import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  const trades = [
    {
      pair: "LTCUSDT",
      position: "Long",
      leverage: "Cross 10.00x",
      amount: "2.0 LTC",
      entry: "122.77",
      exit: "124.95",
      pnl: "+4.0353 USDT",
      pnlPercentage: "(+17.36%)",
      fee: "0.32479161 USDT",
      strategy: "TP/SL",
      startDate: "2024-12-10 00:49:29",
      endDate: "2024-12-12 22:17:25",
      tradesCount: "4",
      tradeId: "742b3119",
    },
    {
      pair: "LTCUSDT",
      position: "Long",
      leverage: "Cross 10.00x",
      amount: "5.0 LTC",
      entry: "122.77",
      exit: "124.95",
      pnl: "+9.8773 USDT",
      pnlPercentage: "(+16.49%)",
      fee: "1.02288154 USDT",
      strategy: "TP/SL",
      startDate: "2024-12-10 00:28:20",
      endDate: "2024-12-12 22:17:25",
      tradesCount: "4",
      tradeId: "cb93069a",
    },
    {
      pair: "LTCUSDT",
      position: "Long",
      leverage: "Cross 10.00x",
      amount: "3.0 LTC",
      entry: "122.77",
      exit: "124.95",
      pnl: "+5.9232 USDT",
      pnlPercentage: "(+16.22%)",
      fee: "0.61694587 USDT",
      strategy: "TP/SL",
      startDate: "2024-12-10 00:21:11",
      endDate: "2024-12-12 22:17:25",
      tradesCount: "4",
      tradeId: "37a7dd31",
    },
    {
      pair: "LTCUSDT",
      position: "Long",
      leverage: "Cross 10.00x",
      amount: "5.0 LTC",
      entry: "122.77",
      exit: "124.95",
      pnl: "+9.8595 USDT",
      pnlPercentage: "(+15.61%)",
      fee: "1.04070154 USDT",
      strategy: "TP/SL",
      startDate: "2024-12-09 13:02:48",
      endDate: "2024-12-12 22:17:25",
      tradesCount: "4",
      tradeId: "0e95d75f",
    },
    {
      pair: "LTCUSDT",
      position: "Long",
      leverage: "Cross 10.00x",
      amount: "5.0 LTC",
      entry: "122.77",
      exit: "124.95",
      pnl: "+9.8476 USDT",
      pnlPercentage: "(+15.07%)",
      fee: "1.0340541 USDT",
      strategy: "TP/SL",
      startDate: "2024-12-09 13:02:48",
      endDate: "2024-12-12 22:17:25",
      tradesCount: "4",
      tradeId: "5e95d75e",
    },
  ];
  
  export function TableDemo() {
    return (
      <div className="w-full flex align-middle justify-center">

     
<div className="w-full flex items-center justify-center">
  <Table className="text-white w-3/4 mx-auto hover:bg-none">
    <TableCaption>A list of our recent trades.</TableCaption>
    <TableHeader className="text-purple-50">
      <TableRow>
        <TableHead className="text-purple-x">Pair</TableHead>
        <TableHead  className="text-purple-x">Position</TableHead>
        <TableHead className="text-purple-x">Leverage</TableHead>
        <TableHead className="text-purple-x">Amount</TableHead>
        <TableHead className="text-purple-x">Entry</TableHead>
        <TableHead className="text-purple-x">Exit</TableHead>
        <TableHead className="text-purple-x">PnL</TableHead>
        <TableHead className="text-purple-x">PnL (%)</TableHead>
        <TableHead className="text-purple-x">Fee</TableHead>
        <TableHead className="text-purple-x">Strategy</TableHead>
        <TableHead className="text-purple-x">Start</TableHead>
        <TableHead className="text-purple-x">End</TableHead>
        <TableHead className="text-purple-x">Trades</TableHead>
        <TableHead className="text-purple-x">Trade ID</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {trades.map((trade) => (
        <TableRow key={trade.tradeId}>
          <TableCell>{trade.pair}</TableCell>
          <TableCell>{trade.position}</TableCell>
          <TableCell>{trade.leverage}</TableCell>
          <TableCell>{trade.amount}</TableCell>
          <TableCell>{trade.entry}</TableCell>
          <TableCell>{trade.exit}</TableCell>
          <TableCell>{trade.pnl}</TableCell>
          <TableCell>{trade.pnlPercentage}</TableCell>
          <TableCell>{trade.fee}</TableCell>
          <TableCell>{trade.strategy}</TableCell>
          <TableCell>{trade.startDate}</TableCell>
          <TableCell>{trade.endDate}</TableCell>
          <TableCell>{trade.tradesCount}</TableCell>
          <TableCell>{trade.tradeId}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div></div>  
    );
  }
  