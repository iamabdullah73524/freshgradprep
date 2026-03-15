// 1. Imports
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Container,
} from '@mui/material';
import { servicesContent } from '../data/servicesContent';
import type { ServiceItem } from '../data/servicesContent';
import reactHydLogo from '../assets/ReactHydLandscapeLogo.jpg';
// 2. Component
const ServicesSection = () => {
  return (
    <Box
      component="section"
      id="services"
      aria-label="Services Offered"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: 'primary.main',
            mb: 8,
            fontWeight: 600,
          }}
        >
          {servicesContent.title}
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {servicesContent.services.map((service: ServiceItem) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Duration */}
                  <Chip
                    label={service.duration}
                    size="small"
                    sx={{
                      mb: 2,
                      backgroundColor: 'secondary.main',
                      color: 'primary.main',
                      fontWeight: 500,
                    }}
                  />

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Price */}
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                    }}
                  >
                    {service.price}
                  </Typography>
                </CardContent>

                {/* CTA */}
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    href={service.ctaHref}
                    fullWidth
                    sx={{
                      backgroundColor: 'highlight.main',
                      fontWeight: 600,
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: 'highlight.dark',
                      },
                    }}
                  >
                    {service.ctaLabel}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// 3. Export
export default ServicesSection;