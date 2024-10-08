import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDEvdDTRNiQ6uzTaBIWXvyyoaHkAEYZqGM",
    authDomain: "cdf-react.firebaseapp.com",
    projectId: "cdf-react",
    storageBucket: "cdf-react.appspot.com",
    messagingSenderId: "1009362172171",
    appId: "1:1009362172171:web:da3a30b27052b1813e4a0e"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app) 

// const misProductos= [
//     {nombre: "Colgante Corazón", stock: 46, precio: 4000, img: "/public/imagenes/colgante-corazon-chico.jpg", idCat: "decoracion", detalles: "Este delicado colgante en forma de corazón está tejido a mano al crochet y confeccionado con telas de alta calidad, aportando un toque artesanal y romántico a cualquier espacio de tu hogar. Ideal para colgar en puertas, paredes o ventanas, su diseño suave y elegante combina perfectamente con decoraciones rústicas, boho o vintage. Perfecto para crear un ambiente cálido y acogedor."},

//     {nombre: "Colgante Flor", stock: 28, precio: 7000, img: "/public/imagenes/colgante-flores-grande.jpg", idCat: "decoracion", detalles: "Este colgante en forma de flor hecho al crochet, es una pieza artesanal única que añade un toque natural y alegre a cualquier ambiente. Su tamaño generoso lo convierte en un excelente elemento decorativo para llenar paredes vacías o resaltar rincones especiales. Ideal para salas de estar, dormitorios o espacios al aire libre techados, su estilo bohemio es perfecto para hogares con decoraciones relajadas y frescas."},

//     {nombre: "Colgante Triángulo", stock: 15, precio: 5000, img: "/public/imagenes/colgante-triangulo.jpeg", idCat: "decoracion", detalles: "Este colgante hecho a mano combina la rusticidad de las ramas naturales que forman un triángulo con la delicadeza del tejido al crochet, creando un equilibrio entre lo natural y lo artesanal. Ideal para quienes buscan una pieza decorativa única que aporte calidez y textura a su hogar. Su estilo bohemio y su diseño geométrico lo convierten en una excelente opción para colgar en habitaciones, salones o terrazas, creando un ambiente acogedor y sereno."},

//     {nombre: "Portavela Macramé", stock: 35, precio: 6000, img: "/public/imagenes//portavela-macrame.jpeg", idCat: "decoracion", detalles: "Aporta un toque bohemio y artesanal a tu hogar con este portavela de macramé hecho a mano. Su intrincado diseño de nudos y texturas le otorgan un carácter cálido y acogedor, perfecto para crear ambientes íntimos. Coloca una vela en su interior y deja que la luz suave atraviese los hilos de macramé, proyectando un juego de sombras que llenará de magia cualquier rincón de tu hogar. Es perfecto para salas de estar, dormitorios o terrazas cubiertas."},

//     {nombre: "Vela Postre Grande", stock: 20, precio: 8000, img: "/public/imagenes/vela-postre-grande.jpg", idCat: "velas", detalles: "Esta vela decorativa es una verdadera obra de arte. Con un diseño inspirado en un delicioso postre, no solo ilumina, sino que también se convierte en una pieza central atractiva para cualquier mesa o estantería. Fabricada con cera de alta calidad, ofrece una combustión lenta y uniforme, permitiéndote disfrutar de su luz cálida durante horas. Ideal para ocasiones especiales o simplemente para darle un toque original a tu decoración cotidiana."},

//     {nombre: "Vela Suculenta Copa Chica", stock:40, precio: 3500, img: "/public/imagenes/vela-suculenta-copa-chica.jpg", idCat: "velas", detalles: "Esta pequeña vela en forma de suculenta, presentada en una delicada copa, es el detalle perfecto para cualquier rincón de tu hogar. Ideal para escritorios, mesas auxiliares o repisas, su diseño compacto y natural añade un toque verde sin necesidad de mantenimiento. La cera de alta calidad garantiza una combustión uniforme y limpia, mientras que su apariencia realista la convierte en una excelente opción para aquellos que aman las plantas pero prefieren una solución decorativa más práctica."},

//     {nombre: "Vela Suculenta Cuenco", stock: 55, precio: 4000, img: "/public/imagenes/vela-suculenta-cuenco.jpg", idCat: "velas", detalles: "Inspirada en la naturaleza, esta vela en forma de suculenta se presenta en un elegante cuenco de madera. Su diseño único la convierte en un elemento decorativo que puede encajar en cualquier espacio, desde salas de estar hasta baños o terrazas. Perfecta para aquellos que buscan añadir un toque de naturaleza sin complicaciones, esta vela es ideal para crear ambientes relajados y acogedores, con una luz cálida que invita a la tranquilidad."},

//     {nombre: "Vela Suculenta Maceta", stock: 35, precio: 4000, img: "/public/imagenes/vela-suculenta-maceta.jpg", idCat: "velas", detalles: "Esta vela en forma de suculenta, colocada en una maceta pequeña, es el toque decorativo perfecto para espacios que necesitan un poco de verde. Su diseño detallado imita la apariencia de una planta real, pero sin la necesidad de cuidados. Perfecta para decorar escritorios, mesas de noche o incluso para regalar a amantes de las plantas, esta vela es una combinación de estilo y funcionalidad, creando ambientes cálidos y acogedores."},

//     {nombre: "Vela Postre Chico", stock: 30, precio: 4000, img: "/public/imagenes/vela-postre-chico.png", idCat: "velas", detalles: "La vela postre chico es un detalle encantador que iluminará cualquier rincón de tu hogar. Su diseño creativo imita un mini postre, convirtiéndola en una pieza decorativa única. Además de proporcionar una luz suave y cálida, su presentación la hace ideal para decorar mesas de comedor, estanterías o para usar en cenas especiales. Un regalo perfecto para quienes buscan una decoración que sea tanto funcional como estética."},

//     {nombre: "Fragancia Mint Tea & Basil", stock: 150, precio: 10000, img: "/public/imagenes/frag-Grace-Mint-Tea-Basil.png", idCat: "fragancias", detalles: "La combinación refrescante de té de menta y albahaca te transportará a un ambiente sereno y revitalizante. Esta fragancia es ideal para crear un espacio donde predomine la frescura, perfecto para momentos de relajación o meditación. Además, su presentación elegante hace que sea un excelente complemento decorativo para cualquier habitación, perfumando de manera sutil y duradera."},

//     {nombre: "Fragancia Cedar & Oud", stock: 150, precio: 10000, img: "/public/imagenes/frag-Cedar-Oud.png", idCat: "fragancias", detalles: "Para aquellos que disfrutan de las fragancias profundas y envolventes, Cedar & Oud es una mezcla cautivadora que combina la robustez del cedro con la exótica calidez del oud. Ideal para llenar tu hogar con un aroma sofisticado y cálido, perfecto para noches tranquilas o momentos íntimos. Su presentación refinada lo convierte en un excelente regalo o una adición lujosa a tu espacio personal."},

//     {nombre: "Fragancia Dark Amber", stock: 150, precio: 10000, img: "/public/imagenes/frag-Dark-Amber.png", idCat: "fragancias", detalles: "Un aroma intenso y seductor, Dark Amber combina notas cálidas y profundas para crear una atmósfera acogedora y misteriosa. Perfecta para aquellos que buscan una fragancia única y elegante, esta mezcla es ideal para perfumar habitaciones principales o áreas sociales, llenándolas de un toque de lujo y confort."},

//     {nombre: "Fragancia Groom Cologne", stock: 150, precio: 10000, img: "/public/imagenes/frag-better-half.png", idCat: "fragancias", detalles: "Con un aroma clásico y refinado, Groom Cologne está diseñada para los amantes de las fragancias frescas y elegantes. Su combinación de notas masculinas crea un equilibrio perfecto entre frescura y sofisticación, ideal para usar en estudios o espacios de trabajo. Además, su presentación sobria y elegante lo hace un accesorio decorativo con personalidad propia."},

//     {nombre: "Aromatizador Rosas", stock: 100, precio: 9000, img: "/public/imagenes/difusor-rosas.jpg", idCat: "fragancias", detalles: "Disfruta del suave y delicado aroma de las rosas frescas con este aromatizador. Perfecto para quienes buscan una fragancia floral que aporte romanticismo y suavidad a sus espacios. Ideal para usar en dormitorios, baños o salas de estar, este aromatizador llenará de frescura y elegancia tu hogar, proporcionando una sensación de bienestar y tranquilidad."},

//     {nombre: "Aromatizador Limon", stock: 100, precio: 9000, img: "/public/imagenes/difusor-limon.jpg", idCat: "fragancias", detalles: "Energiza tu hogar con la frescura vibrante del limón. Este aromatizador es perfecto para darle un toque refrescante a cocinas, baños o salas de estar. Su fragancia cítrica y estimulante es ideal para aquellos que buscan un ambiente limpio y revitalizado, lleno de energía positiva."},

//     {nombre: "Aromatizador Lavanda", stock: 100, precio: 9000, img: "/public/imagenes/difusor-lavanda.jpg", idCat: "fragancias", detalles: "Relájate con la suave fragancia de la lavanda, una de las esencias más apreciadas por su capacidad de inducir calma y serenidad. Este aromatizador es perfecto para dormitorios, espacios de meditación o cualquier área donde desees promover una atmósfera de paz y relajación. Su fragancia persistente te ayudará a desconectar y disfrutar de momentos de tranquilidad."},

//     {nombre: "Aromatizador Orquídeas", stock: 50, precio: 9000, img: "/public/imagenes/difusor-orquideas.jpg", idCat: "fragancias", detalles: "El aroma delicado y exótico de las orquídeas te transportará a un ambiente de lujo y sofisticación. Este aromatizador es ideal para quienes desean llenar su hogar con una fragancia floral única que aporta un toque elegante y refinado a cualquier espacio. Perfecto para salones o áreas sociales, su aroma envolvente te hará sentir en un jardín de ensueño."},

//     {nombre: "Flores de tela", stock: 60, precio: 3500, img: "/public/imagenes/flores-de-tela.jpg", idCat: "decoracion", detalles: "Estas hermosas flores están elaboradas a mano con telas suaves y naturales en una variedad de tonos cálidos que evocan la naturaleza y la serenidad. Los pétalos están disponibles en colores como rosa suave, terracota, crema y verde claro, que aportan un toque delicado y elegante a cualquier espacio. El centro de las flores está finamente detallado con pequeños pistilos marrones que le dan un aspecto realista y artesanal. Perfectas para decorar cualquier rincón de la casa, estas flores son ideales para centros de mesa, arreglos florales permanentes o incluso para bodas y eventos especiales. Su diseño atemporal y colores versátiles hacen que combinen fácilmente con diferentes estilos de decoración, desde rústico hasta moderno."}
// ]
// import { collection, doc, writeBatch } from "firebase/firestore";

// const subirProductos = async () => {
//     const batch = writeBatch(db)
//     const productosRef = collection(db, "productos")

//     misProductos.forEach((producto)=>{
//         const nuevoDoc = doc(productosRef)
//         batch.set(nuevoDoc, producto)
//     })

//     try {
//         await batch.commit();
//         console.log("Productos subidos exitosamente")
//     } catch(error) {
//         console.log("Error subiendo productos:", error)
//     }
// }

// subirProductos()