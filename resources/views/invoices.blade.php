<!DOCTYPE html>
<html>
<head>
    <title>Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f8f8;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            padding: 30px;
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 28px;
            text-transform: uppercase;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 30px;
        }
        th, td {
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        th {
            background-color: #007bff;
            font-weight: bold;
            text-align: left;
            color: #fff;
        }
        .total {
            font-weight: bold;
            text-align: right;
            color: #007bff;
            font-size: 24px;
        }
        .logo {
            text-align: center;
            margin-bottom: 40px;
        }
        .logo img {
            max-width: 250px;
        }
        .footer {
            text-align: center;
            margin-top: 50px;
            color: #777;
            font-size: 14px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
        .invoice-details {
            margin-bottom: 30px;
        }
        .invoice-details p {
            margin: 5px 0;
        }
        .invoice-details .label {
            font-weight: bold;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Invoice</h1>
        <div class="invoice-details">
            <p><span class="label">Invoice Number:</span> #{{ $invoice->id }}</p>
            <p><span class="label">Date:</span> {{ $invoice->created_at->format('Y-m-d') }}</p>
        </div>
        <table>
            <tr>
                <th>Name</th>
                <td>{{ $invoice->name }}</td>
            </tr>
            <tr>
                <th>Mobile</th>
                <td>{{ $invoice->mobile }}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{{ $invoice->email }}</td>
            </tr>
            <tr>
                <th>Service</th>
                <td>{{ $invoice->service }}</td>
            </tr>
            <tr>
                <th>Price per Hour</th>
                <td>${{ $invoice->price_per_hour }}</td>
            </tr>
            <tr>
                <th>Working Hours</th>
                <td>{{ $invoice->working_hours }}</td>
            </tr>
            <tr>
                <th>Total Amount</th>
                <td class="total">RM {{ $invoice->price_per_hour * $invoice->working_hours }}</td>
            </tr>
        </table>
        <div class="footer">
            Thank you for your business! If you have any questions, please contact us.
        </div>
    </div>
</body>
</html>