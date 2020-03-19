export default class Snake {

    constructor(body, direction) {
        this.body = body;
        this.direction = direction;
        this.ateApple = false;
    }

    advance() {
        const nextPosition = this.body[0].slice();
        switch (this.direction) {
            case "left":
                nextPosition[0] -= 1;
                break;
            case "right":
                nextPosition[0] += 1;
                break;
            case "down":
                nextPosition[1] += 1;
                break;
            case "up":
                nextPosition[1] -= 1;
                break;
            default:
                throw ("invalid direction");
        }
        this.body.unshift(nextPosition);
        if (!this.ateApple)
            this.body.pop();
        else
            this.ateApple = false;
    }

    setDirection(newDirection) {
        let allowedDirections;
        switch (this.direction) {
            case "left":
            case "right":
                allowedDirections = ["up", "down"];
                break;
            case "down":
            case "up":
                allowedDirections = ["left", "right"];
                break;
            default:
                throw ("invalid direction");
        }
        if (allowedDirections.includes(newDirection)) { // if (allowedDirections.indexOf(newDirection) > -1) "IndexOf" remplacer par "includes"
            this.direction = newDirection;
        }
    }

    checkCollision(widthInBlocks, heightInBlocks) {
        let wallCollision = false;
        let snakeCollision = false;
        const head = this.body[0];
        const rest = this.body.slice(1);
        const snakeX = head[0];
        const snakeY = head[1];
        const minX = 0;
        const minY = 0;
        const maxX = widthInBlocks - 1;
        const maxY = heightInBlocks - 1;
        const isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;
        const isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;

        if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls)
            wallCollision = true;

        for (let i = 0; i < rest.length; i++) {
            if (snakeX === rest[i][0] && snakeY === rest[i][1])
                snakeCollision = true;
        }

        return wallCollision || snakeCollision;
    }

    isEatingApple(appleToEat) {
        const head = this.body[0];
        if (head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1])
            return true;
        else
            return false;
    }

}