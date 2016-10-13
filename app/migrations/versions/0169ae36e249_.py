"""empty message

Revision ID: 0169ae36e249
Revises: None
Create Date: 2016-10-12 23:40:23.906003

"""

# revision identifiers, used by Alembic.
revision = '0169ae36e249'
down_revision = None

from alembic import op
import sqlalchemy as sa

def upgrade():
    op.create_table(
        'posts',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('title', sa.String),
        sa.Column('body', sa.String),
        sa.PrimaryKeyConstraint('id')
    )

def downgrade():
    op.drop_table('posts')
