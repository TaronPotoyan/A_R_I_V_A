import { useEffect, useState } from 'react';
import type { IPhone } from '../../Back-end/interfaces/phon';
import axios from 'axios';
import ProductCard from '../components/product';
import { Skeleton, Card, CardContent, CssBaseline, Box } from '@mui/material';
import Grid from '@mui/material/Grid';

const API = import.meta.env.VITE_SERVER_API;

export default function Home() {
    const [products, setProducts] = useState<IPhone[]>([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(true);
  axios
    .get(API)
    .then((response) => {
      if (response.data.message) {
        alert(response.data.message);
        return;
      }
      setProducts(response.data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
}, []);
    const skeletonArray = Array.from({ length: 6 });

    return (
        <>
            <CssBaseline />
            <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
                {loading ? (
                    <Grid container spacing={3}>
                        {skeletonArray.map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ borderRadius: 3, minHeight: 400 }}>
                                    <Skeleton variant="rectangular" height={200} animation="wave" />
                                    <CardContent>
                                        <Skeleton variant="text" height={30} sx={{ mb: 1 }} animation="wave" />
                                        <Skeleton variant="text" height={25} width="60%" animation="wave" />
                                        <Skeleton variant="rectangular" height={40} sx={{ mt: 2 }} animation="wave" />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : products.length === 0 ? (
                    <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>No products found</h2>
                ) : (
                    <Grid container spacing={3}>
                        {products.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product._id}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
        </>
    );
}
