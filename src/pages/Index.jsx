import { Container, VStack, Heading, Text, Box, SimpleGrid, Button } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Software Engineer", company: "Tech Corp", location: "San Francisco, CA", description: "Develop and maintain web applications." },
  { id: 2, title: "Product Manager", company: "Innovate Ltd", location: "New York, NY", description: "Lead product development teams." },
  { id: 3, title: "UX Designer", company: "Design Studio", location: "Remote", description: "Create user-friendly interfaces." },
];

const JobCard = ({ title, company, location, description }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Heading size="md">{title}</Heading>
    <Text fontWeight="bold">{company}</Text>
    <Text>{location}</Text>
    <Text mt={2}>{description}</Text>
    <Button mt={4} colorScheme="teal">Apply Now</Button>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Job Listings</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {jobs.map(job => (
            <JobCard key={job.id} {...job} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;