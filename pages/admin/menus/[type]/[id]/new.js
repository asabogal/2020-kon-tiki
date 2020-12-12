import { useRouter } from 'next/router';

const New = () => {

  const router = useRouter();
  const menuType = router.query.type;
  const itemId = router.query.id;
  return (

    <div>
      {console.log(itemId, menuType)}
      PASS MENUFORM with ('$new' and '$menuType') props!
      (these props will be used to handleSubmit form and POST backend URL !!)
    </div>
  );
};

export default New;