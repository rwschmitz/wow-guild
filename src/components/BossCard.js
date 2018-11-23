import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import '../css/index.css';

class BossCard extends React.Component {

  render() {
    const { bossKillInformation } = this.props;

    const generateBossCards = () => {
      const cardArr = [];
      if(Object.keys(bossKillInformation).length !== 0) {
        for(let i = 0; i < bossKillInformation.bossName.length; i+=1) {
          cardArr.push(
            <Card key={ bossKillInformation.bossName[i] } className="card" elevation={ 2 }>
              <CardMedia
                component="img"
                alt={ bossKillInformation.bossName[i] }
                image={ bossKillInformation.bossKillImages[i] }
                className="card__image"
              />
              <h2 className="card__headline">{ bossKillInformation.bossName[i] }</h2>
              <p className="card__copy">
                Info about { bossKillInformation.bossName[i] }
              </p>
              <CardActions>
                <Button size="small" color="primary">
                  Enlarge Image
                </Button>
                <Button size="small" color="primary">
                  Raid Comp
                </Button>
              </CardActions>
            </Card>
          )
        }
      }
      return cardArr
    }

    return (
      generateBossCards()
    );
  }
}

export default BossCard;

BossCard.propTypes = {
  bossKillInformation: PropTypes.objectOf(PropTypes.shape()).isRequired
}
