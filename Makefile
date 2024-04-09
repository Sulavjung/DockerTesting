# Define the Docker image name
IMAGE_NAME = my_app_image4

# Declare phony targets to prevent conflicts with file names
.PHONY: build run

# Target to stop and remove Docker container and image with specified name
dockerClean:
	@echo ""  # Empty line
	@echo "***********Stopping Docker container...***********"
	docker stop ${IMAGE_NAME}  

	@echo ""  # Empty line
	@echo "***********Removing Docker container...***********"
	docker rm ${IMAGE_NAME}

	@echo ""  # Empty line
	@echo "***********Removing Docker image...***********"
	docker rmi ${IMAGE_NAME}

# Target to build Docker image with specified name
buildImage:
	@echo ""  # Empty line
	@echo "***********Building Docker image...***********"
	docker build -t $(IMAGE_NAME) .

# Target to clean existing Docker resources and build Docker image
cleanBuildImage: dockerClean buildImage

# Target to build Docker container with bind mount for local development
buildContainer_with_bind:
	@echo ""  # Empty line
	@echo "***********Building Docker container with bind mount...***********"
	docker run -it \
		--name $(IMAGE_NAME) \
		-p 3002:3002 \
		-p 3001:3001 \
		--mount type=bind,source="$(shell pwd)"/,target=/app \
		$(IMAGE_NAME)

# Target to clean existing Docker resources, build Docker image, and build Docker container with bind mount
cleanBuildImage_and_Container: dockerClean buildImage buildContainer_with_bind

# Target to build Docker image and build Docker container with bind mount
newImage_and_Container: buildImage buildContainer_with_bind

# Target to connect to Docker container's terminal
connectTerminal:
	@echo ""  # Empty line
	@echo "***********Connecting to Docker container's terminal...***********"
	docker exec -it ${IMAGE_NAME} bash

# Target to stop and remove Docker container
cleanContainer:
	@echo ""  # Empty line
	@echo "***********Stopping Docker container...***********"
	docker stop ${IMAGE_NAME}

	@echo ""  # Empty line
	@echo "***********Removing Docker container...***********"
	docker rm ${IMAGE_NAME}
