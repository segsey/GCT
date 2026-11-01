import { Card, Text, Avatar, HStack, VStack, CustomProvider } from "rsuite";
function TestimonyCardModule({ item }) {
  return (
    <div className="col-12 md:col-4">
      <Card shaded="hover" className="h-100">
        <Card.Header>
          <HStack>
            <Avatar circle src="https://i.pravatar.cc/150?u=9" />
            <VStack spacing={2}>
              <Text className="fw-bold">{item.name}</Text>
              <Text muted size="sm">
                {item.courseLearnt}
              </Text>
            </VStack>
          </HStack>
        </Card.Header>
        <Card.Body className="fs-lg">"{item.testimony}"</Card.Body>
        <Card.Footer>
          <Text muted>Joined in January {item.year}</Text>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default TestimonyCardModule;
