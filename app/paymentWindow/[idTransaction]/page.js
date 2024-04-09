

import getTransactionById from "@/app/libs/getTransactionById"

export default async function PaymentWindow({ params: { idTransaction } }) {

    const transaction = await getTransactionById(idTransaction)

    return (
        <div className=''>
            <div className='flex mx-auto w-[1200px]'>
                <div className='flex flex-col w-[50%] border'>
                    <span className='text-xl font-semibold mb-4'>Информация по платежу </span>
                    <span className='text-lg mb-5'>Магазин: {transaction.idRequester}</span>
                    <span className='text-lg mb-5'>Сумма платежа: {transaction.sum}</span>
                    <span className='text-lg mb-5'>ID транзакции: {transaction.idTransaction} </span>
                    <span className='text-lg mb-5'>Время: {transaction.dataSent.toDateString()} </span>
                    <span className='text-lg mb-5'>Статус: {transaction.status} </span>
                </div>
                <div className='w-[50%]'>
                    <div className='w-[550px] h-[300px] bg-[#1EB62F] flex flex-col text-4xl text-white rounded-[30px] mx-auto'>
                        <div className='w-[400px] mx-auto'>
                            <div className='flex items-center mt-10'>
                                {/* <div className='mr-5'><img className='w-[30px]' src='/image/sberbank/sberLogo.png'></img></div> */}
                                <span>Sberbank</span>
                            </div>
                            <div className='mt-10'>2202 2212 2321 2131</div>
                            <div className='mt-10'>Popov P.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <button className='bg-green-500 p-5 rounded-xl text-white text-xl'>Проверить оплату</button>
            </div>
        </div>
    )
}
