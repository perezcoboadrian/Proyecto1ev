//Para encontrar todos los productos que tienen exactamente 100 unidades.
db.fruteria.find({ qty : {$eq : 100}})

//Para encontrar todos los productos que tienen más de 100 unidades, sin contar los que tienen exactamente cien.
db.fruteria.find( { qty: { $gt: 100 } } )

//Para encontrar todos los productos que tienen más de 100 unidades, contando los que tienen exacatamente cien.
db.fruteria.find( { qty: { $gte: 100 } } )

//Para encontrar todas las frutas que tienen 100, 30 o 75 unidades.
db.fruteria.find( { qty: { $in: [ 100, 30, 75 ] } } )

//Para encontrar las frutas que su precio por Kilo es menor que 2 euros, sin contar los que valen exactamente 2€.
db.fruteria.find( { PrecioKilo: { $lt: 2.00 } } )

//Para encontrar las frutas que su precio por Kilo es menor que 2 euros, contando los que valen exactamente 2€.
db.fruteria.find( { PrecioKilo: { $lte: 2.00 } } )

//Para encontrar las frutas que su proveedor NO es Frutiban.
db.fruteria.find( { Proveedor: { $ne: "Frutiban" } } )

//Para encontrar las frutas que su proveedor NO es ni frutiban ni FrutasDominguez.
db.fruteria.find( { Proveedor: { $nin: [ "Frutiban", "FrutasDominguez" ] } } )




//Para encontrar las frutas que tengan 100 unidades y no sea un producto español. 
db.fruteria.find( { $and: [ { qty: { $eq: 100 } }, {productoEspañol : false} ] } )

//Para encontrar las frutas que NO empiecen por la M mayuscula.
db.fruteria.find( { item: { $not: { $regex: /^M/ } } } )

//Para eliminar de la consulta a los que tengan menos de 100 unidades o sean productos extranjeros
db.fruteria.find( { $nor: [ { qty: { $lt : 100} }, { productoEspañol: false } ]  } )

//Para encontrar a los que o tengan más de 100 unidades o cuesten más de 2 euros.
db.fruteria.find( { $or: [ { qty: { $gt : 100} }, { PrecioKilo: {$gt : 2.00} } ]  } )



//Para encontrar a los productos que terminen en as. 
db.fruteria.find( { item: { $regex: /as$/ } } )

//Para encontrar las frutas que empiecen con M.
db.fruteria.find( { item:  { $regex: /^M/ }  } )

//Para encontrar las frutas que tengan una A (mayúscula o minuscula) entre medio.
db.fruteria.find({item: { $regex: /.*A.*/i}})


//Para encontrar las frutas que hayan llegado a la tienda después del 31 de diciembre de 2019.
db.fruteria.find({FechaEntradaTienda : { $gt: '2019-12-31'} })



